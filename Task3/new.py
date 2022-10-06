

print("hey")
s=input()
n=int(input())
list1=[]

# list1 will store every row which will be created from input string by putting characters in zigzag pattern in the rows

for x in range(n):
    list1.append("")
k=2*n-2
for x in range(len(s)):
    k1=x%k
    if(k1<=n-2):
        list1[k1]+=s[x]
    else:
        k1=k-k1
        list1[k1]+=s[x]
res=""
print(list1)
for x in range(len(list1)):
    res+=list1[x]
print(res)