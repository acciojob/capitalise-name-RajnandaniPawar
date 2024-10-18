//your JS 
document.getElementById('fname').addEventListener('blur', function() {
    // Convert the value of the input field to uppercase
    this.value = this.value.toUpperCase();
});