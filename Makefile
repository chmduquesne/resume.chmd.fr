MYAGE=$(shell bash -c 'echo $$(( (`date +%s` - `date --date="1985-01-13" +%s`)/31536000 ))')

all: index.html index.pdf index.docx index.txt

index.md: resume.md
	sed 's/{{ MYAGE }}/${MYAGE}/' resume.md > index.md

index.html: resume.md style.css
	pandoc --standalone -c style.css -H age.js --from markdown --to html -o index.html resume.md

index.pdf: index.md
	pandoc --standalone --template style.tex -V papersize=A4 --from markdown --to context -o index.tex index.md
	context index.tex

index.docx: index.md
	pandoc --from markdown --to docx -o index.docx index.md

index.txt: index.md
	pandoc --standalone --from markdown --to plain -o index.txt index.md

clean:
	rm -f *.html *.pdf *.docx *.txt index.md index.tex *.tuc *.log

checklinks:
	wget --spider --force-html --no-verbose -i index.html -o - | grep -B1 "broken link"
