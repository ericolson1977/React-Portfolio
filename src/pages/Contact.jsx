import "../styles/Contact.css"

export default function Contact() {

    function onNameBlur(event) {
        if (event.target.value == "") {
            document.querySelector("#name-warning").style.display = "block";
        } else {
            document.querySelector("#name-warning").style.display = "none";
        }
    }

    function onEmailBlur(event) {
        if (event.target.value == "") {
            document.querySelector("#email-warning").style.display = "block";
        } else {
            document.querySelector("#email-warning").style.display = "none";
        }
    }

    function onMessageBlur(event) {
        if (event.target.value == "") {
            document.querySelector("#message-warning").style.display = "block";
        } else {
            document.querySelector("#message-warning").style.display = "none";
        }
    }

    return (
        <>
            <h1>This is the Contact Page</h1>
            <div class="container">
                <form>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1"
                            onBlur={onNameBlur}
                        />
                        <div id="name-warning" class="form-text text-danger">Name cannot be empty</div>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"
                            onBlur={onEmailBlur}
                        />
                        <div id="email-warning" class="form-text text-danger">Email cannot be empty</div>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                            onBlur={onMessageBlur}
                        />
                        <div id="message-warning" class="form-text text-danger">Message cannot be empty</div>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}