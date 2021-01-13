const sentence = "hello there from lighthouse labs";

timeOutDelay = 0

delayTimer = () => {

  for (const char of sentence) {
    setTimeout(() => {
     process.stdout.write(char);
    }, timeOutDelay) // <= 1s delay to make it noticeable. Can dial it down later.
    timeOutDelay += 50  
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, timeOutDelay)
}


delayTimer()
