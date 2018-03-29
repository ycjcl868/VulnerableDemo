import hashlib
import sys

for i in xrange(1000000):
    hash = hashlib.md5(str(i)).hexdigest()
    if hash[0:6] == sys.argv[1]:
      print i, hash
