import crytpo from 'crypto';

const hash =  crytpo.createHash('sha256');
hash.update("password12334456");
const hashedPassword =hash.digest('hex')
console.log(hashedPassword);
crytpo.randomBytes(32,(error,buf)=>{
    if(error) throw error;
    console.log(buf.toString('hex'));
});