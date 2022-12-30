import time
import pyautogui
import pytesseract
import time
import keyboard
import pyperclip

time.sleep(2)
pages = set()
final = "I've made a react app. Here's my code for App.js:\n"
a = open("App.js",'r')
lines = a.readlines()
for l in lines: final = str(final) + str(l)
for i in range(10):
    try: 
        f = open("Unit"+str(i)+".js",'r')
        lines = f.readlines()
        if(len(lines) !=0):
            final = str(final)+"\n \n Here's my code for "+"Unit"+str(i)+".js" + "\n"
            for l in lines: 
                final = str(final) + str(l)
    except: continue
for i in range(10):
    try: 
        f = open("Page"+str(i)+".js",'r')
        lines = f.readlines()
        if(len(lines) !=0):
            final = str(final)+"\n \n Here's my code for "+"Page"+str(i)+".js" + "\n"
            for l in lines: 
                final = str(final) + str(l)
    except: continue
for i in range(10):
    try: 
        f = open("style"+str(i)+".css",'r')
        lines = f.readlines()
        if(len(lines) !=0):
            final = str(final)+"\n \n Here's my code for "+"style"+str(i)+".css" + "\n"
            for l in lines: 
                final = str(final) + str(l)
    except: continue
print(final)
pyperclip.copy(final)
# print(pyperclip.paste())