### 1. Config IAM User

#### IAM User

> Iam (Identity and Access Management): là dịc vụ giúp kiểm soát truy cập tới tài nguyên AWS. Khi đó, chỉ có những tài khoản IAM mà bạn cho phép mới có thể truy cập hoặc có quyền sử dụng tài nguyên mà bạn chỉ định.
> Mặc định khi đăng ký AWS, tài khoản của bạn là tài khoản `root`, tài khoản có quyền cao nhất với tất cả tài nguyên trong hệ thống AWS. Vì vậy, nếu bạn không có nhu cầu sử dụng tất cả các dịch vụ của AWS thì các bạn nên đăng ký tài khoản IAM để giới hạn quyền truy cập tới tài nguyên cần thiết.

#### Các lợi ích của IAM

- Chia sẻ quyền truy cập tới tài khoản của bạn cho ứng dụng và user khác
- Chỉ định quyền truy cập của tài khoản IAM trên từng tài nguyên nhất định.
- Multi-factor authentication (MFA): Hỗ trợ xác thực 2 bước.
- Bạn có thể sử dụng dịch vụ IAM mà không phải trả bất kỳ chi phí nào để duy trì tài khoản IAM.

#### Access key ID và Secret key

> cho phép truy cập đến hệ thống AWS với tư cách là (IAM user) thông qua các development tool
> vd: **github action ==> CICD**

#### Cấp quyền truy cập cho IAM user

- cấp các quyền cần thiết cho các hoạt động của user
- vd: github action deploy (ci/cd) to Elasticbeanstalk thì cần các quyền như sau
  ![permission](/images/permission-iam-user.PNG)

### 2. Config ElasticBeanStalk

#### create role for deploy EB

![permission](/images/role-elastisbeanstalk.PNG)

#### create Application + Environments (xem các config đã có trên AWS)

### 3. CI/CD github action

> follow file: **CD_QA_Workflow.yml**
> Lưu ý: **region: ap-southeast-2** phải đúng với region của `application_name` được tạo. nếu không thì sẽ bị lỗi không tìm thấy `application_name` khi deploy (CD) lên EB
