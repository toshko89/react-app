// import db from "../firebase.js";
// import { collection, addDoc } from "firebase/firestore"; 
import { useState } from 'react';



export default async function AddBook() {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [description, setDescription] = useState();
    const [file, setFile] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }
    // try {
    //     const docRef = await addDoc(collection(db, "users"), {
    //       first: "Ada",
    //       last: "Lovelace",
    //       born: 2020
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }

    return (
        <section id="add-book" className="padd-section wow fadeInUp">

            <div className="container">
                <div className="section-title text-center">
                    <h2>Add new book</h2>
                    <p className="separator">Add new book below</p>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <div className="form">
                            <div id="sendmessage">New book added. Thank you!</div>
                            <div id="errormessage"></div>
                            <form role="form" className="contactForm">
                                <div className="form-group">
                                    <input type="text" name="title" className="form-control" id="name" placeholder="Title" value={name} data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control" name="age" id="email" placeholder="Age" value={age} data-rule="minlen:1" data-msg="Please enter a valid age" />
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="description" rows="5" data-rule="required" value={description} data-msg="Please write something for the book" placeholder="Description"></textarea>
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <input type="file" id="myFile" name="file-name" onChange={handleChangeFile} />
                                </div>

                                <div className="text-center"><button type="submit" onClick={submitForm}>Add</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}