<script>
window.onload = function(){
    // compute my age
    var birthday = Date.parse("January 13, 1985 00:00:00")
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs);
    var myAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    // brutal, but for such a small document, I don't care
    // replace the placeholder
    document.body.innerHTML = document.body.innerHTML.replace("{{ MYAGE }}", myAge);
}
</script>
