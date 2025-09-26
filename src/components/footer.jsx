function Footer() {
  return (
    <div className="flex justify-center items-center">
          <p><span className="text-black font-intro-name font-bold">My PGP public key: </span>
            <a href="https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x6da936c9a472ab3b48b2de5dafbfccf673018578"
                className="text-my-black font-mono underline">6DA936C9A472AB3</a></p>
    </div>
  )
  
}

export {Footer};