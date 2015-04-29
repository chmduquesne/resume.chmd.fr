<script>
// Use pandoc '-H <script>' to inject this in the document header
//
// If you read this, you are probably also interested in
// https://blog.chmd.fr/editing-a-cv-in-markdown-with-pandoc.html
//
// You read this code! Thank you, have a unicorn :)
//
//          \
//           \
//            \\
//             \\
//              >\/7
//          _.-(6'  \
//         (=___._/` \
//              )  \ |
//             /   / |
//            /    > /
//           j    < _\
//       _.-' :      ``.
//       \ r=._\        `.
//      <`\\_  \         .`-.
//       \ r-7  `-. ._  ' .  `\
//        \`,      `-.`7  7)   )
//         \/         \|  \'  / `-._
//                    ||    .'
//                     \\  (
//                      >\  >
//                  ,.-' >.'
//                 <.'_.''
//                   <'


window.onload = function(){
    // compute my age
    var birthday = Date.parse("January 13, 1985 00:00:00")
    var ageDiff = Date.now() - birthday;
    var msPerYear = 31536000000;
    var myAge = Math.floor(ageDiff / msPerYear);

    // Replace the placeholder
    //
    // Pandoc does not offer an option to attach an html id to my age
    // placeholder in the markdown source (without impacting the other
    // generated formats), so the simplest option is to operate the
    // replacement in the whole document. Not extremely elegant, but for
    // such a small document, there is no performance issue.
    document.body.innerHTML = document.body.innerHTML.replace("{{ MYAGE }}", myAge);
}
</script>
