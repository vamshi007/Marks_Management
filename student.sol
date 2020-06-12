pragma solidity ^0.5.1;
pragma experimental ABIEncoderV2;
contract Student{
    mapping(string => Stu_Det) students;
    uint256 _percentage;
    struct Stu_Det{
        string id;
        string name;
        uint256 Maths_1;
        uint256 Maths_2;
        uint256 Maths_Major;
        uint256 Physics_1;
        uint256 Physics_2;
        uint256 Physics_Major;
        uint256 Chemistry_1;
        uint256 Chemistry_2;
        uint256 Chemistry_Major;
    }
    constructor() public{
        
    }
    function fillStudent(string memory _id, string memory _name, uint256 _Maths_1, uint256 _Maths_2, uint256 _Maths_Major, uint256 _Physics_1, uint256 _Physics_2, uint256 _Physics_Major, uint256 _Chemistry_1, uint256 _Chemistry_2, uint256 _Chemistry_Major) public{
        students[_id] = Stu_Det(_id,_name,_Maths_1,_Maths_2,_Maths_Major,_Physics_1,_Physics_2,_Physics_Major,_Chemistry_1,_Chemistry_2,_Chemistry_Major);
    }
    function getStudent(string memory _id) public view returns(Stu_Det memory){
        return (students[_id]);
    }
}
