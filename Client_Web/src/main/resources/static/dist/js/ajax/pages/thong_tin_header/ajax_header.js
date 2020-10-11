
var idNguoiDung = window.sessionStorage.getItem("id");

$(function () {
    nameTitle = $("#name-title");
    nameEmp = $("#name-emp");
    role = $("#role");
    avatar = $("#avatar");
    nameCompany = $("#name-company");
    logo = $("#logo");
    setViewHeader();
})


function setViewHeader() {
    findNhanVienById(idNguoiDung).then(rs =>{
        if(rs.message === "found"){
            nameTitle.text(rs.data.hoVaTen);
            nameEmp.text(rs.data.hoVaTen);
            let ava = rs.data.urlAnhDaiDien;
            console.log(ava);
            if(ava === null || ava === ''){
                avatar.attr("src","./dist/img/avatar2.png")
            }else {
                avatar.attr("src",URL_FILE + ava);
            }
        }else{

        }
    });
    findNguoiDungPhongBanByNhanVienId(idNguoiDung).then(rs => {
        if(rs.message === "found"){
            role.text(rs.data.chucVu.tenChucVu);
            nameCompany.text(rs.data.phongBan.chiNhanh.tongCongTy.tenDoanhNghiep);
            logo.attr("src",rs.data.phongBan.chiNhanh.tongCongTy.logo);
        }
    })
}