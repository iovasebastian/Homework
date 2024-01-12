const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://iovasebastian8:Sebica2003@project.y36dsll.mongodb.net/Notes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
    .then(()=>{
        console.log("Db conected")
    })
    .catch((error)=>{
        console.log('failed to connect to db',error);
    });

const ItemSchema = new mongoose.Schema({
    titlu : String,
    content: String
});
const Item = mongoose.model('Item',ItemSchema);

app.get('/api/items', async(req,res) => {
    try{
        const allItems = await Item.find();
        res.status(200).json(allItems);
    }catch(error){
        res.status(500).json({error: 'Internal server error'});
    }
    
})
app.post('/api/items', async(req,res) => {
    try{
        const newItem = new Item(req.body);
        await newItem.save();
        const responseItem = {
            _id: newItem._id,
            titlu:  newItem.titlu,
            content: newItem.content
        }
    }catch(error){
        console.error("error saving item",error);
        res.status(500).json({error:'Internal service error'});
    }
});
app.delete('/api/items/:id', async(req,res) =>{
    const id = req.params.id;
    try{
        const deleteNote = await Item.deleteOne({_id:id});
        res.status(200).json({message : 'note deleted succesgully'});
    }catch(error){
        console.error('Error deleting note:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})
app.put('/api/items/:id', async (req, res) => {
    const id  = req.params.id;
    console.log(id);
    const content  = req.body.content;
    const titlu = req.body.titlu;
    console.log(titlu);
    try {
        if (!content) {
            return res.status(400).json({ error: 'Content is required for update' });
        }

        const updatedNote = await Item.findOneAndUpdate(
            { _id: new mongoose.Types.ObjectId(id) },
            { titlu: titlu, content: content},
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ error: 'Note not found' });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error('Error updating note:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server listening to port ${PORT}`);
})



