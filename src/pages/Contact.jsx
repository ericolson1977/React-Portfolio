import "../styles/Contact.css"

export default function Contact() {

    function onNameBlur(event) {
       if(event.target.value == "") {
        document.querySelector("#name-warning").style.display = "block";
       } else {
        document.querySelector("#name-warning").style.display = "none";
       }
    }


    return (
        <>
            <h1>This is the Contact Page</h1>
            <div class="container">
            <form>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onBlur={onNameBlur}
                    />
                    <div id="name-warning" class="form-text text-danger">Name cannot be empty</div>
                </div>

                {/* <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onBlur={onBlur}
                    />
                    <div id="email-warning" class="form-text text-danger">Name cannot be empty</div>
                </div> */}



                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </>
    )
}