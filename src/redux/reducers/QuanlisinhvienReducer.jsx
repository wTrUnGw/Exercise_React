const stateDefault = {
  mangSinhVien: [{ maSV: 1, hoTen: "Nguyen Van A", soDt: "0909665931", email: "A@gmail.com" }],
};

export const QuanLySinhVienReducer = (state = stateDefault, actiom) => {
  return { ...state };
};
