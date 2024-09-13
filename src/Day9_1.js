import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = "https://sample-api-fwbm.onrender.com/api/v1";

const Day9 = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [user, setUser] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const navigate = useNavigate();
    useEffect(() => {

        fecthMyUser();
    }, []
    )
    const fecthMyUser = async () => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.get(`${API_URL}/users/me`, { headers: { Authorization: `Bearer ${token}` } })
            setUser(res.data.data.data)
        } catch (error) {
            localStorage.removeItem('token')
        }
    }


    return (

        <div className="container-1">
            <h1>Profile Infomation</h1>
            <div className="container">

                <img className="profile-image" width={200} height={200} src="/IMG_3413.jpg"></img>
                <div className="info"><center><h2>Username: {user?.first_name}   {user?.surname}</h2></center>

                    <p><strong>Email:</strong> {user?.email}</p>
                    <p><strong>Contact:</strong> {user?.phone_number}</p>
                </div>
                <div>
                    <h1>Social Media</h1>
                    <div className="social"><img width={50} height={50} src="https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-facebook-icon-social-media-by-vexels.png"></img><p><a href="http://www.facebook.com/nustino"> Ntesla</a></p>
                        <img width={50} height={50} src="https://static.vecteezy.com/system/resources/previews/016/716/450/original/tiktok-icon-free-png.png"></img><p> Time Traveller</p>
                    </div>
                    <div className="real"><h2>Real Contact</h2>
                        <p>SOUTSADA SISOURATH</p>
                        <p>Nustjrx@gmail.com</p>
                        <p>Whatsapp: 020-2266-1181</p>
                        <div id='send-btn'>
                            <button >Send Message</button>
                        </div>

                    </div>

                </div><hr></hr>
                <div className="info2"><center><h2>Professional Skill</h2></center>

                    <p><strong>Fornt-end:</strong> Html, Photoshop CS6, ReactJS</p>
                    <p><strong>Back-end:</strong> PHP, Laravel, MongoDB</p>
                </div>
            </div>
            <style jsx>{`
            .real{
            color:white;
            font-family: noto san;
            border: red solid 3px;
            padding: 10px;
            border-radius:40px;
            // display:flex;
            
            }
            .real h2{
            text-align: center;
            }
            .real #send-btn {
            align-items:center;
            text-align:center;
            display:flex;
            justify-content: center;
            }
            a {
            color:white;
            }
            .social {
            color: white;
            display: flex;
            text-align: center;
            padding: 15px;

            

            }
            .container {
                min-height: 100vh;
                // background-color: #aadaf0;
                background-image: linear-gradient(to bottom, red, blue);
                padding: 20px;
                max-width:600px;
                text-align: left;
                margin:0 auto;
                display:flex;
                flex-direction:column;
                align-item:left;
                border-raduis: 20px;
                box-shadow: 0 0 5px rgba(0,0,0,0.5);

                }
            .profile-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 15px;
            border:white solid 5px;
          }
            .info {
            border-raduis: 20px;
                    padding: 15px;
                    margin-bottom:15px;
                    box-shadow: 0 0 5px rgba(0,0,0,0.5);
                    background-image: url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg");
                    color: blue;
                    }
                    .info strong{
                color: #de4587;
                
                }
                 .info2 {
                    border-raduis: 30px;
                    padding: 15px;
                    margin-bottom:15px;
                    box-shadow: 0 0 5px rgba(0,0,0,0.5);
                    background-image: url("https://freevector-images.s3.amazonaws.com/uploads/vector/preview/33522/LinedPaperBackground.jpg");
                    color: #de4587;
                    font-family: tomaho
                    }
                    .info strong{
                color: #de4587;
                
                }
                .info2 h2{
                color:#136b48;
                }
                .info2 strong{
                color:black;
                }
            `}
            </style>
        </div>

    )
}
export default Day9;