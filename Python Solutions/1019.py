segundos = int(input())

h= segundos // 3600
segundos%= 3600

m= segundos // 60
segundos%= 60

print(f"{h}:{m}:{segundos}")
