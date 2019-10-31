

export default{
    status: function () {
    console.log("--------cookie----=",localStorage.getItem("STATUS"));
        if (localStorage.getItem("STATUS") == 'PENDDING' || localStorage.getItem("STATUS") == 'FAILED') {
            return true;
        }
        return false;
    },
}