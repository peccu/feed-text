git fetch && git merge origin/master && git push -u origin $(git symbolic-ref --short HEAD|tr -d "\n")

