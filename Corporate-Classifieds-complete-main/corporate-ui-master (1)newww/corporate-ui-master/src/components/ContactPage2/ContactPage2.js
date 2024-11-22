import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
const ContactPage2 = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="offer-main-div  pl-4">
                <div className="container-fluid">
                    <div className="row">
                        <div><h1 className='pt-4 pb-3'>CONTACT SUPPORT DETAILS</h1></div>

                        <table class="table table-striped">
                            <tbody>
                                <tr>
                                    <th scope="row" className="w-25">Phone</th>
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

export default ContactPage2;