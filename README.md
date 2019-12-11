# Node DB3 Guided Project

Guided project for **Node DB3** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
- [This Query Tool Loaded in the browser](https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top).
- a rest client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor creates database access methods for a multi table schema.

### Queries

select e.FirstName
    , e.LastName
    , o.Id
    , o.CustomerId
    , c.CompanyName
from [order] as o
join employee as e on o.EmployeeId = e.id
join customer as c on o.CustomerId = c.id;

-------------------------------------------------------

select (e.FirstName || ' ' || e.LastName) as SoldBy
    , o.Id
    , o.CustomerId as ShippedTo
    , c.CompanyName as OrderedBy
from [order] as o
join employee as e on o.EmployeeId = e.id
join customer as c on o.CustomerId = c.id;

--------------------------------------------------------

select o.id as OrderNumber
    , p.ProductName
    , od.Quantity
    , p.UnitPrice as Price
    , (od.Quantity * p.UnitPrice) as LineTotal
    , s.CompanyName as SoldBy
from [order] as o
join OrderDetail as od
    on o.id = od.orderid
join product as p
    on od.productId = p.id
join Supplier as s
    on s.id = p.SupplierId;

----------------------------------------------------------

---- a join is the same as an inner join ----
select distinct c.id, c.companyName
from customer as c 
join [order] as o on c.id = o.customerId
order by c.id; -- 16789 (91 unique customers)

---- all the customer, even if they have no orders ----
select c.id, c.companyName as Customer, o.id 
from customer as c
left join [order] as o on c.id = o.customerId
order by c.id;

select * from [order]
---- delete from [order]
where customerId = 'ALFKI';

### 