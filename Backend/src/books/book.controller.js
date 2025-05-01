const Book = require("./book.model")

// Post a Book
const postABook =  async(req,res)=> {
    try{
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message: "Book Posted Successfully", book: newBook});
    }catch (error){
        console.error("Error creating book", error);
        res.status(500).send({message: "Failed to create book"});
    }
}

// Get all Books
const getAllBooks = async(req,res) => {

    try{
        const books = await Book.find().sort({createdAt: -1});
        res.status(200).send(books);

    }catch(error){
        console.error("Error Fetching Books", error);
        res.status(500).send({message: "Failed to Fetch books"});
    }

}

// Get a Single Book
const getSingleBook = async (req,res) => {
    try{

        const {id} = req.params;
        const book = await Book.findById(id);
        if(!book){
            res.status(404).send({message: "Book Not Found"});
        }
        res.status(200).send(book);

    }catch(error){
        console.error("Error Fetching Single Book", error);
        res.status(500).send({message: "Failed to Fetch Book"});
    }
}

// Update a Book Data
const updateBook = async (req,res) => {
    try{
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedBook){
            res.status(404).send({message: "Book is not found"});
        }
        res.status(200).send({message: "Book updated successfully", book: updatedBook});
    }catch(error){
        console.error("Error Updating a Book", error);
        res.status(500).send({message: "Failed to Update a book"});
    }
}

// Delete a book
const deleteABook = async(req,res)=> {
    try{
        const {id} = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook){
            res.status(404).send({message: "Book is not Found!"});
        }

        res.status(200).send({
            message: "Book Deleted Successfully",
            book: deletedBook
        })

    }catch(error){
        console.error("Error deleting a book", error);
        res.status(500).send({message: "Failed to Delete a book"});
    }
}

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteABook,
}
