# http://www.kammerl.de/ascii/AsciiSignature.php
# Font: 'bigchief'

print_header () {
  printf "\e[36m"
  echo '___________________________________________________________________________'
  echo '  ______                               __                                  '
  echo '    /            /     /             /    )                   ,            '
  echo '---/-------__---/__---/----__--------\--------__--_/_--_/_--------__----__-'
  echo '  /      /   ) /   ) /   /___)        \     /___) /    /    /   /   ) /   )'
  echo '_/______(___(_(___/_/___(___ _____(____/___(___ _(_ __(_ __/___/___/_(___/_'
  echo '                                                                        /  '
  echo '                                                                    (_ /   '
  echo ''
  printf "\e[0m\n"
  echo 'Setting development environment to run your tasks with Gulp'
  printf "\e[1;33m"
  echo 'Install npm pkg...'
  printf "\e[0m\n"
}

check_npm() {
  npm install
}

start_npm() {
  npm start
}

main() {
  print_header
  check_npm
  start_npm
}

main
