<script>
// Wow you are reading the source!
//
// Since you are really into details, you should know that this resume was
// generated from markdown with pandoc. I wrote a blog post about it
// http://blog.chmd.fr/editing-a-cv-in-markdown-with-pandoc.html. Go check
// it out!
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
//
// The following snippet is meant to inject my age instead of the
// placeholder {{ MYAGE }}. More automation, less maintainance, yay!
//
// Use pandoc '-H <script>' to put it in the document header
window.onload = function(){
    // compute my age
    var birthday = Date.parse("January 13, 1985")
    var ageDiff = Date.now() - birthday;
    var msPerYear = 31536000000;
    var myAge = Math.floor(ageDiff / msPerYear);

    // Replace the placeholder
    //
    // Unfortunately, pandoc does not offer an easy option to put an html
    // placeholder in the markdown source without messing too much with
    // the other formats, so the simplest option is to operate the
    // replacement in the whole document. For big documents, this is not
    // recommended, but for a resume, there should not be any performance
    // issue.
    document.body.innerHTML = document.body.innerHTML.replace("{{ MYAGE }}", myAge);
}
</script>
