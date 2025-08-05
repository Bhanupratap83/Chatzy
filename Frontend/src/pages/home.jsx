import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const {addToUserHistory} = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);
    }

    return ( 
        <>
            <div className="navBar">
                <div style={{ display: "flex", alignItems: "center" }}>

                    <h1 style={{color:"blue", margin:"10px"}}>Chatzy</h1>
                </div>

                <div styles={{display: "flex", alignItems: "center"}}>
                    <IconButton onClick={
                        () => {
                            navigate("/history");
                        }
                    }>
                        <RestoreIcon />
                        
                    <p>&nbsp;History</p>
                    </IconButton>
                    <Button onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth")
                    }}>
                        <h2>Logout</h2>
                    </Button>
                </div>
            </div>
            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call Just Like Quality Education</h2>
                        <br/>
                        <div style={{ display: 'flex', gap: "10px" }}>

                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="Connecting..." />
                </div>
            </div>
        </>
    );
}

 export default withAuth(HomeComponent);