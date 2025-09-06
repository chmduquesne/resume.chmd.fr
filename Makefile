MYAGE=$(shell bash -c 'echo $$(( (`date +%s` - `date --date="1985-01-13" +%s`)/31536000 ))')

all: index.html Christophe-Marie_Duquesne.pdf Christophe-Marie_Duquesne.docx Christophe-Marie_Duquesne.txt

index.md: resume.md
	sed 's/{{ MYAGE }}/${MYAGE}/' resume.md > index.md

index.html: resume.md style.css
	pandoc --standalone -c style.css -H age.js --from markdown --to html -o index.html resume.md

context-lmtx/tex/texmf-linux-64/bin/context:
	./install-context.sh

Christophe-Marie_Duquesne.pdf: index.md context-lmtx/tex/texmf-linux-64/bin/context
	pandoc --standalone --template style.tex -V papersize=A4 --from markdown --to context -o Christophe-Marie_Duquesne.tex index.md
	PATH=${PWD}/context-lmtx/tex/texmf-linux-64/bin:${PATH} context Christophe-Marie_Duquesne.tex

Christophe-Marie_Duquesne.docx: index.md
	pandoc --from markdown --to docx -o $@ index.md

Christophe-Marie_Duquesne.txt: index.md
	pandoc --standalone --from markdown --to plain -o $@ index.md

clean:
	rm -f *.html *.pdf *.docx *.txt index.md index.tex *.tuc *.log

checklinks:
	wget --spider --force-html --no-verbose -i index.html -o - | grep -B1 "broken link"
