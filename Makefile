MYAGE=$(shell bash -c 'echo $$(( (`date +%s` - `date --date="1985-01-13" +%s`)/31536000 ))')

all: index.html index.pdf index.docx index.txt

index.md: resume.md
	sed 's/{{ MYAGE }}/${MYAGE}/' resume.md > index.md

index.html: index.md style.css
	pandoc --standalone -c style.css -H age.js --from markdown --to html -o index.html resume.md

index.pdf: index.html
	wkhtmltopdf index.html index.pdf

index.docx: index.md
	pandoc --from markdown --to docx -o index.docx index.md

index.txt: index.md
	pandoc --standalone --smart --from markdown --to plain -o index.txt index.md

clean:
	rm -f *.html *.pdf *.docx *.txt index.md
