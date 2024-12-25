import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function RoomPage() {
    const { roomID } = useParams();

    const myMeeting = async(element) => {
        const appID = 973992499;
        const serverSecret = "2ff4a753c672adbe7b642b731280f20d";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Aman Kumar");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `http://localhost:5173/room/${roomID}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showAudioVideoSettingsButton: true,
            showMyCameraToggleButton: true, 
            showScreenSharingButton: true
        })
    }

    return (
        <>
            <div ref={myMeeting}></div>
        </>
    )
}

export default RoomPage;