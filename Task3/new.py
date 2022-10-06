


s=input()
n=int(input())
list1=[]

# list1 will store every row which will be created from input string by putting characters in zigzag pattern in the rows

for x in range(n):
    list1.append("")
k=2*n-2
for x in range(len(s)):
    k1=x%k             #after every k=2*n-2 positions the row index to which character to be appended will repeat
    if(k1<=n-2):
        list1[k1]+=s[x] #k1 acts as a referece by which we calculate the row index , in it's less than n-1 it will itself act as row index, otherwise "how much distant is from k " will act as row index

    else:
        k1=k-k1
        list1[k1]+=s[x] 
res=""

for x in range(len(list1)):
    res+=list1[x]

print("input string:",s)
print("output string:",res)