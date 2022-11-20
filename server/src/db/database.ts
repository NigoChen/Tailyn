import mongoose from 'mongoose';
import keys from './key';
const db = mongoose.connect(keys.database.host, {retryWrites: true, w: 'majority'});
// const pool = mysql.createPool(keys.database);

db.then(() => console.log('connected'))
.catch((error) => console.log('fail connected'));

export default db;
