import mysql from 'promise-mysql';
import keys from './key';
const pool = mysql.createPool(keys.database);
export default pool;
