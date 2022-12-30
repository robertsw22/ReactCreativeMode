import pyautogui
import pytesseract
import time
import keyboard
import pyperclip

def listen():
    while True:
        if keyboard.is_pressed('esc'): break
        while True:  # making a loop
            if keyboard.is_pressed('enter'):  #
                print('You Pressed Enter!')
                print("Waiting for response")
                while True:
                    if keyboard.is_pressed('tab'):
                        print("Finished")
                        copycoors= pyautogui.locateOnScreen('copy.png')
                        count = 0
                        while copycoors is None:
                            print('scrolling')
                            pyautogui.scroll(10)
                            copycoors= pyautogui.locateOnScreen('copy.png')
                            count+=1
                            if count >= 10: 
                                print("wrong page")
                                break
                        all_copy = pyautogui.locateAllOnScreen('copy.png')

                        tracker = [0 for i in range(3)] #Change this for number of unit components
                        for i in all_copy:
                            print(i)
                            ix,iy=i[0],i[1]
                            pyautogui.moveTo(ix/2, iy/2)
                            pyautogui.click()
                            time.sleep(2)
                            text = str(pyperclip.paste())
                            print("const Unit1 =" in text, "class Unit1"in text,"function Unit1"in text)
                            if ("const Unit0 =" in text ) or ("class Unit0"in text) or ("function Unit0()"in text):
                                f = open('Unit0.js','w')
                                print(text)
                                print("writing to unit0.js")
                                f.write(text)
                            if ("const Unit1 =" in text) or ("function Unit1" in text):
                                f = open('Unit1.js','w')
                                print(text)
                                print("writing to unit1.js")
                                f.write(text)
                            if ("const Unit2 =" in text) or ("function Unit2" in text):
                                f = open('Unit2.js','w')
                                print(text)
                                print("writing to unit2.js")
                                f.write(text)
                            if (("const Unit3 =" in text) or  ("function Unit3" in text)):
                                f = open('Unit3.js','w')
                                print(text)
                                print("writing to unit3.js")
                                f.write(text)
                            if (("const Unit4 =" in text) or  ("function Unit4" in text)):
                                f = open('Unit4.js','w')
                                print(text)
                                print("writing to unit4.js")
                                f.write(text)
                            if (("const Unit5 =" in text) or  ("function Unit5" in text)):
                                f = open('Unit5.js','w')
                                print(text)
                                print("writing to unit5.js")
                                f.write(text)
                            if (("const Unit6 =" in text) or  ("function Unit6" in text)):
                                f = open('Unit6.js','w')
                                print(text)
                                print("writing to unit6.js")
                                f.write(text)
                            if (("const Unit7 =" in text) or  ("function Unit7" in text)):
                                f = open('Unit7.js','w')
                                print(text)
                                print("writing to unit7.js")
                                f.write(text)
                            if (("const Unit8 =" in text) or  ("function Unit8" in text)):
                                f = open('Unit8.js','w')
                                print(text)
                                print("writing to unit8.js")
                                f.write(text)
                            if (("const Page0 =" in text) or  ("function Page0" in text)):
                                f = open('Page0.js','w')
                                print(text)
                                print("writing to Page0.js")
                                f.write(text)
                            if (("const Page1 =" in text) or  ("function Page1" in text)):
                                f = open('Page1.js','w')
                                print(text)
                                print("writing to Page1.js")
                                f.write(text)
                            if (("const Page2 =" in text) or  ("function Page2" in text)):
                                f = open('Page2.js','w')
                                print(text)
                                print("writing to Page2.js")
                                f.write(text)
                            if (("const Page3 =" in text) or  ("function Page3" in text)):
                                f = open('Page3.js','w')
                                print(text)
                                print("writing to Page3.js")
                                f.write(text)
                            if (("const App =" in text) or  ("function App" in text)):
                                f = open('App.js','w')
                                print(text)
                                print("writing to App.js")
                                f.write(text)
                      
                        # *_, last = all_copy 
                        # print("bottom-most box: ",last)
                        # copycoors= pyautogui.locateOnScreen('copy.png')
                        # cx,cy = last[0],last[1]

                        # pyautogui.moveTo(cx/2, cy/2,.1)
                        # time.sleep(0.1)
                        # pyautogui.click()
                        # time.sleep(0.1)
                        # pyautogui.click()
                        # text = pyperclip.paste()
                        # if "const Unit" in text:
                        #     f = open('Unit.js','w')
                        #     print(text)
                        #     print("writing to unit.js")
                        #     f.write(text)
                        # if "const Unit1" in text:
                        #     f = open('Unit1.js','w')
                        #     print(text)
                        #     print("writing to unit1.js")
                        #     f.write(text)
                        f.flush()
                        f.close()
                        break  # finishing the loop
                break
