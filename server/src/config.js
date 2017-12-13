export const config = {
  db: {
    database: "viziya_invoices",
    user: "viziya",
    pass: 'viziya2',
    options: {
      dialect: 'mysql',
      host: 'localhost',
      define: {
        timestamps: false
      }
    }
  }
}
export default config