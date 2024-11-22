import Header from "../header/Header";
import "./contactStyle.css";
const ContactPage = () => {
    return (
        <>
            <Header />
            <div className="min-vh-100" style ={{backgroundColor:"#F2CF81" ,justifycontent:"center",alignitems:"center" }} >
            <div class="container contact-div">
                    <div className="contact-heading text-center">
                        <h1>Contact Details</h1><br />
                        <p>WELCOME</p><br />
                    </div>

                    <div className="contact-details">
                        <table class="table table-striped">
                            <tbody>
                                <tr>
                                    <th scope="row" className="w-25">PHONE NUMBER</th>
                                    <td>+123456789</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>corporateadmin@gmail.com</td>
                                </tr>

                                <tr>
                                    <th scope="row">Address</th>
                                    <td>MUMBAI, MAHARASTRA INDIA</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;