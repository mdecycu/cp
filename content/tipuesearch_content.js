var tipuesearch = {"pages": [{'title': 'About', 'text': 'Online compiler: \n https://onecompiler.com/ \n https://onecompiler.com/about \n https://onecompiler.com/tutorials \n https://www.programiz.com/ \n https://www.onlinegdb.com/ \n https://code.visualstudio.com/docs/python/python-web   \n 學會建立並維護網站內容. \n 學習使用 Python 編寫 cmsimde 網際內容管理程式: \n https://www.techrepublic.com/article/python-is-eating-the-world-how-one-developers-side-project-became-the-hottest-programming-language-on-the-planet/ \n Windows \n Ubuntu \n Web Pages \n https://python-course.eu/books/bernd_klein_python_tutorial_a4.pdf \n https://github.com/AllenDowney/ThinkPython \n cmsimde based 網站功能: \n 關鍵字搜尋 \n 簡化分頁式網站內容編輯 \n 內建網誌 \n 內建網際簡報 \n basic_portable_python.7z  (下載 15MB, 解開後 55MB) \n ssh to server \n git clone --recurse-submodules  git@your_ssh_session_name:github_account/cp.git \n check firewall status \n sudo ufw status \n sudo ufw allow 8004 \n cd cp \n vi server.py to use 9004 as internal port \n check if wsgi can be started throught server.py \n hupper3 -m server.py& \n \n 建立帳號 \n 考試帳號: \n https://exam.cycu.org \xa0 (線上考試帳號, 帳號為學號, 自選密碼, 請將密碼存入手機備忘錄) \n OneDrive 帳號: \n 先從  https://mail.nfu.edu.tw  以學號登入 (收取帳號申請確認信). \n 請各學員至  https://www.microsoft.com/zh-tw/education/products/office , 以 @nfu 帳號申請 OneDrive 帳號. \n 計算機程式 MS Teams 代碼: plmm43c \n Given a  https://github.com/mdecycu/cmsite  based Github Classroom repository \n localhost 維護倉儲網站內容 \n s1511.cycu.org 上維護倉儲網站內容 \n Replit 平台上以 Import from Github 倉儲內容後, 利用動態編輯器改版網頁內容 \n Github 帳號: \n 在  https://github.com/join  建立帳號 (以姓名英文縮寫加上學號作為帳號, 例如: pjc41033101) \n 登入 Replit: \n 利用 Github 帳號登入  https://replit.com/ \n 以 Import from Github 導入要在 Replit 維護的倉儲 \n 登入 Ubuntu server: \n https://s1511.cycu.org  (demo for pj2022) \n Python: \n 近端基本的 Python 可攜程式套件: \n 用於自行建立可攜程式套件 (利用舊版 Python 建立新版的 Python 可攜程式套件) \n basic_portable_python.7z  (下載 15MB, 解開後 55MB) \n SciTE 編輯器介紹 \n 編輯器 code.page, 何謂  Code Page ? \n 縮排設定,  Indentation in Python \n 載入新版本設定 \n 如何解譯 Python 程式 \n gen_portable_python.py \n https://docs.python.org/zh-tw/3/howto/urllib2.html \n https://docs.python.org/zh-tw/3/library/os.html \n 從官網的檔案傳輸伺服器下載 Python 基本模組的安裝檔案, 利用 Windows 內建的 msiexec.exe 解開各模組安裝檔案後, 添加可攜 Python 程式套件的啟動與關閉批次檔案, 以及基本檔案編輯器之後, 就可以透過程式方法, 利用舊版的 Python 程式套件建立新板的 Python 程式套件. \n # https://docs.python.org/zh-tw/3/howto/urllib2.html\nimport urllib.request\n# https://docs.python.org/zh-tw/3/library/os.html\nimport os\n\n# basic files for Python installation\npy_list = ["core", "dev", "exe", "lib", "tcltk", "tools"]\n# Python version\nversion = "3.11.4"\n# Python msi download URL\nftp = "https://www.python.org/ftp/python/" + version + "/amd64/"\n# location for Portable Python\npath = "c:\\\\Python311"\n# create directory\ntry:\n    os.mkdir(path)\nexcept:\n    # path exists\n    pass\n# get Python installation msi files and extract into target dir\nfor i in py_list:\n    filename = i + ".msi"\n    url = ftp + filename\n    # download basic python msi file\n    urllib.request.urlretrieve(url, filename)\n    os.system("msiexec.exe /a " + i + ".msi targetdir=" + path)\n    # delete msi file\n    os.remove(i + ".msi")\n \n 安裝 Python 模組可以使用 pip 工具, 但 pip.exe 會寫入安裝工具時所配置的 Python.exe 或 Pythonw.exe 路徑, 首先是如何在可攜 Python 中配置 pip \n 取得 get-pip.py 後, 以可攜 Python.exe 執行後, 就能在可攜套件中配置 pip.exe \n Javascript: \n https://learnjavascript.online/  (Use the first free 7 chapters) \n https://www.freecodecamp.org/news/23-free-websites-to-learn-javascript/', 'tags': '', 'url': 'About.html'}, {'title': '計算機程式', 'text': 'Replit 以 github mdecycu 帳號登入, 即為 Replit 系統中的 wcms 帳號. \n 先從  https://mde.tw/wcms  取出有用的資料 \n 準備直接在 Replit 的 wcms 帳號中開發 cmsimde 網際內容管理系統 \n cmsimde 所使用的模組: \n flask flask_cors bs4 lxml markdown pelican leo pyopenssl gevent \n 利用 cmsimde 原始碼, 說明每一個模組的用法 \n cmsimde 的後續開發, 利用 class 物件導向進行開發 \n 納入 template 架構 \n 針對所使用的技術, 逐步更新', 'tags': '', 'url': '計算機程式.html'}, {'title': 'Networks', 'text': '網路設定 \n 機械設計系的網路配置 \n 電腦輔助設計室的網路配置 \n 手機使用無線網路上網 \n 筆電使用無線網路上網 \n https://www.haproxy.org  (compare with stunnel)', 'tags': '', 'url': 'Networks.html'}, {'title': 'Servers', 'text': 'http://wcm.cycu.org:88/github/wcm2023/content/Servers.html \n s1511 必須在 /etc/default/stunnel4 中加入 ENABLED=1 \n sudo /etc/init.d/stunnel4 restart 可重新啟動 stunnel \n 建立 stunnel.conf \n # 想要透過程式方法, 建立 stunnel.conf 設定檔案, 其中分別從 9001 到 9300, 8001 到 8300\nfirst = \'\'\'\n[https]\naccept = cad2.cycu.org:\n\'\'\'\nsecond = \'\'\'\nconnect = 127.0.0.1:\n\'\'\'\nthird = \'\'\'cert = /etc/letsencrypt/live/cad2.cycu.org/fullchain.pem\nkey = /etc/letsencrypt/live/cad2.cycu.org/privkey.pem\nTIMEOUTclose = 0\n\'\'\'\nlist8 =[str(i) for i  in range(8001, 8301)]\nlist9=[str(i) for i  in range(9001, 9301)]\n \nsetup = ""\nfor i in zip(list8, list9):\n    #print(i)\n    print(i[0], i[1])\n    setup += first.strip() + i[0] + "\\n" + second.strip() + i[1] + "\\n" + third\n \nwith open("stunnel.conf", "w") as f:\n    f.write(setup) \n 假如要以自己架設的伺服器來取代 Replit, 第一步是如何在 Ubuntu 22.04 Server 上建立每位學員的帳號. 使用  newusers  指令, 配合建立一個包含帳號、密碼、uid、gid、comment、home dir 以及 shell (/bin/bash) 資料的 users.txt, 然後使用 sudo newusers users.txt 就可以完成所有學員帳號的建立. 但必須要先取得初始 uid, 也就是列出現有帳號的所屬 uid, 然後才能設定後續代號的 user id. \n 列出現有帳號 uid 的指令為: cut -d: -f1,3 /etc/passwd \n 表示要從 /etc/passwd 檔案, 以 : 符號分割檔案, 然後只取出第一與第三欄位的資料. 假如傳回: \n root:0\ndaemon:1\nbin:2\nsys:3\nsync:4\ngames:5\nman:6\nlp:7\nmail:8\nnews:9\nuucp:10\nproxy:13\nwww-data:33\nbackup:34\nlist:38\nirc:39\ngnats:41\nnobody:65534\n_apt:100\nsystemd-network:101\nsystemd-resolve:102\nmessagebus:103\nsystemd-timesync:104\npollinate:105\nsshd:106\nsyslog:107\nuuidd:108\ntcpdump:109\ntss:110\nlandscape:111\nusbmux:112\ntcexam:1000\nlxd:999\npostgres:113\ntcexamdb:1001\ncad2022:1002\nstunnel4:998\ncd1:1002\ncd3:1003 \n 表示新建帳號的 uid 與 gid 就可以從 1004 開始, 然後連續增量後配給新的用戶. \n 建立各課程對應的 Ubuntu 帳號與密碼檔案: \n # 導入亂數模組\nimport random\n# 導入字串模組\nimport string\n# 利用 def 關鍵字定義函式\n# 函式的輸入變數可以設定初始值\ndef password_generator(size=4, chars=string.ascii_lowercase + string.digits):\n    # 函式內以多行註解說明函式功能\n    """Generate random password\n    """\n    # 利用 return 關鍵字將所產生的亂數字串傳回\n    return \'\'.join(random.choice(chars) for _ in range(size))\n# 建立一個變數與隨後的字串對應\npass_string = "abcdefghkmnpqrstuwxyz123456789"\ncp_num = ["0747", "0761"]\ncad_num = ["0773", "0786"]\ndef gen_acc_pass(course, course_num):\n    stud_list =[]\n    for num in course_num:\n        url = "https://nfu.cycu.org/?semester=1111&courseno=" + num + "&column=True"\n        class_list = open(url).read().split("\\n")[:-1]\n        stud_list += class_list\n        #print(stud_list)\n    for stud_num in stud_list:\n        password = password_generator(4, pass_string)\n        #print(password)\n        account = course + stud_num\n        #print(account)\n        print(stud_num + "\\t" + account + "\\t" + password)\ngen_acc_pass("cp", cp_num)\ngen_acc_pass("cad", cad_num) \n create_users_txt.py: \n with open("2022_fall_ubuntu_account_pass.txt") as f:\n    data = f.readlines()\n# newusers format:  \n# pw_name:pw_passwd:pw_uid:pw_gid:pw_gecos:pw_dir:pw_shell\n# uid starts from 1002\nuid_starts = 1001\nusers = ""\nsend = ""\n \nfor i in data:\n    #stud_num \\t account \\t password \\n\n    stud = i.split("\\t")\n    stud_num = stud[0]\n    account = stud[1]\n    password = stud[2].rstrip()\n    uid_starts += 1\n    uid = str(uid_starts)\n    gid = uid\n    gecos = account\n    home_dir = "/home/" + account\n    shell = "/bin/bash"\n    #print(stud_num, account, password)\n    users += account + ":" + password + ":" + uid + ":" + gid + ":" + gecos + ":" + home_dir + ":" + shell + "\\n"\n    send += stud_num + ":" + account + ":" + password + "\\n"\n \nwith open("users.txt", "w", encoding="utf-8", newline=\'\\n\') as f:\n        f.write(users)\n \nwith open("send.txt", "w", encoding="utf-8", newline=\'\\n\') as f:\n        f.write(send) \n 假如沒有採用 newline=\'\\n\', 在 Windows 寫檔案所使用的跳行符號, 以 sftp 傳到 Ubuntu 時將會因為 shell 並非 /bin/bash 而是加上 ^M$ 的錯誤 shell 資料, 導入用戶無法 login. \n 若要修正跳行符號錯誤, 可以採用: \n change_shell.py \n import os\nwith open("users.txt", "r", encoding="UTF-8") as f:\n    data = f.read().splitlines()\nfor i in data:\n    account = i.split(":")[0]\n    print(account)\n    os.system("sudo chsh -s /bin/bash " + account) \n 當執行上列程式時, 為避免在程式中列出管理者密碼, 可以編輯 /etc/sudoers 並加入: \n # only require a password once every 60 minutes\nDefaults timestamp_timeout=60 \n 可以讓 sudo python3 change_shell.py 執行時無需輸入管理者密碼. \n 當伺服器運作期程結束, 可以在 /etc/sudoers 已經納入 timeout 設定後, 利用 python3 del_users.py 刪除對應的使用者與其用戶目錄. \n import subprocess\n \n"""\n/etc/sudoers\nvi /etc/sudoers\nuse w! to write the read only file\nadd the following to sudoers\n \n# only require a password once every 60 minutes\nDefaults timestamp_timeout=60\n \nuse \nsudo python3 del_users.py\nto delete users and their home directories\n"""\n \nwith open("users.txt", "r") as f:\n    data = f.read().splitlines()\n#print(data)\nstud_list = []\nfor i in data:\n    stud_num = i.split(":")[0]\n    #print(stud_num)\n    stud_list.append(stud_num)    \nfor user in stud_list:\n    try:\n        subprocess.run(["sudo", "userdel", "-r", user], check=True)\n        print(str(user) + " deleted!")\n        subprocess.run(["sudo", "rm", "-rf", f"/home/{user}"], check=True)\n        print(str(user) + " home deleted!")\n    except subprocess.CalledProcessesError:\n        print(str(user) + " is not deleted!") \n 其中的 users.txt 就是前面用來建立用戶帳號的設定檔案. \n', 'tags': '', 'url': 'Servers.html'}, {'title': 'Mojo', 'text': '🔥 = mojo \n 50703199 starts  https://docs.modular.com/mojo/ \n https://playground.modular.com/hub/login   \n https://github.com/modularml/mojo   \n https://docs.modular.com/mojo/programming-manual.html \n 創造 Mojo 新程式語言的緣由:  https://docs.modular.com/mojo/why-mojo.html \n Mojo roadmap:  https://docs.modular.com/mojo/roadmap.html \n Mojo 為編譯程式語言, 因此需要 main() function: \n fn main():\n    var x: Int = 1\n    x += 1\n    print(x) \n syntaxhilighter 必須從 static/syntaxhilighter/shBrushPython.js 修改後, 納入 Mojo 程式語言的關鍵字後, 再設定 \n \\static\\tinymce4\\tinymce\\plugins\\sh4tinymce\\plugin.js 與 plugin.min.js 檔案後納入 Mojo 程式語言的高亮顯示. \n \n', 'tags': '', 'url': 'Mojo.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};