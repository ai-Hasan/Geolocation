function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }else{
        document.getElementById("location").innerHTML="Location is not supported by this browser";
    }
}

    function showPosition(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        document.getElementById("location").innerHTML=`latitude : ${latitude} <br> longitude : ${longitude}`;
    }

    function showError(error){
        let message = "";
        switch(error){
            case error.PERMISSION_DENIED:
                message = "user denied for the location access";
                break;
            case error.POSITION_UNAVAILABLE:
                message = "Locaiton not available";
                break;
        }
        document.getElementById("location").innerHTML=message;
    }