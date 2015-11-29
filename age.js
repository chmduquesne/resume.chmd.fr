<script>
// Wow you are reading the source!
//
// Did you know that this html resume was generated from markdown?
// http://blog.chmd.fr/editing-a-cv-in-markdown-with-pandoc.html
//
// By the way, if you like beer, you should definitely
// check out the best blog article I ever wrote:
// http://blog.chmd.fr/operations-research-and-beer-drinking.html
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
// The following snippet is meant to inject your age instead of the
// placeholder {{ MYAGE }}.
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
    // This resume is meant to be generated with pandoc (see
    // https://blog.chmd.fr/editing-a-cv-in-markdown-with-pandoc.html).
    // Unfortunately, pandoc does not offer an easy option to put an html
    // placeholder in the markdown source without messing too much with
    // the other formats, so the simplest option is to operate the
    // replacement in the whole document. For big documents, this is not
    // recommended, but for a resume, there should not be any performance
    // issue.
    document.body.innerHTML = document.body.innerHTML.replace("{{ MYAGE }}", myAge);
}
</script>
