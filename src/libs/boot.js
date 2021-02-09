module.exports = app => {

    // app.db.sequelize.sync: crea la tablas ya configuradas. Luego arranca el server.
    app.db.sequelize.sync()
        .done(() => {
            app.listen(app.get('port'), () => {
                console.log('Server on  port', app.get('port'));
            });
        });
}