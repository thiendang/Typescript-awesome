var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["AUTHOR"] = "AUTHOR";
    Role["MEMBER"] = "MEMBER";
})(Role || (Role = {}));
var user = {
    name: 'Donna',
    role: Role.ADMIN
};
if (user.role === Role.ADMIN) {
    console.log('is admin');
}
