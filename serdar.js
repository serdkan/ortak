
---TAHSILAT BILGILER BASLANGI
select 	'Sozlesme Adeti' AS commentTR,'Sozlesme Adeti' AS commentEN,'Sozlesme Adeti' AS commentRU,'03' AS parentCode, '03.01' AS  code,dbo.ERPSF_CalculateAccountingTransactions('340',A.Id,6,NULL,0,2) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Sozlesme Adeti'  AS nameTR,
'Sozlesme Adeti'  AS nameEN, 
'Sozlesme Adeti'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100

 UNION ALL

 select 	'Sozlesme Toplami (Sozlesme Para Birimine gore)' AS commentTR,'Sozlesme Toplami (Sozlesme Para Birimine gore)' AS commentEN,'Sozlesme Toplami (Sozlesme Para Birimine gore)' AS commentRU,'03' AS parentCode, '03.02' AS  code,dbo.ERPSF_CalculateAccountingTransactions('340',A.Id,6,NULL,0,3) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Avans Tahsilati - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( S )'  AS nameTR,
'Avans Tahsilati - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( S )'  AS nameEN, 
'Avans Tahsilati - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( S )'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100

 UNION ALL

 select 	'Sozlesme Deger Dusuklugu Karsiligi' AS commentTR,'Sozlesme Deger Dusuklugu Karsiligi' AS commentEN,'Sozlesme Deger Dusuklugu Karsiligi' AS commentRU,'03' AS parentCode, '03.03' AS  code,dbo.ERPSF_CalculateAccountingTransactions('340',A.Id,6,NULL,0,4) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Sozlesme Deger Dusuklugu Karsiligi - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( S )'  AS nameTR,
'Sozlesme Deger Dusuklugu Karsiligi - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( S )'  AS nameEN, 
'Sozlesme Deger Dusuklugu Karsiligi - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( S )'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100
 UNION ALL

  select 	'Sozlesme Para Br' AS commentTR,'Sozlesme Para Br' AS commentEN,'Sozlesme Para Br' AS commentRU,'03' AS parentCode, '03.03' AS  code,0 as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Sozlesme Para Br - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))  AS nameTR,
'Sozlesme Para Br - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))  AS nameEN, 
'Sozlesme Para Br - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100
 UNION ALL
--SOZLESME BILGILERI BITIS



---TAHSILAT BILGILER BASLANGI
select 	'Avans Tahsilati' AS commentTR,'Avans Tahsilati' AS commentEN,'Avans Tahsilati' AS commentRU,'01' AS parentCode, '01.01' AS  code,dbo.ERPSF_CalculateAccountingTransactions('340',A.Id,6,NULL,0,0) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Avans Tahsilati - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t1 )'  AS nameTR,
'Avans Tahsilati - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t1 )'  AS nameEN, 
'Avans Tahsilati - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t1 )'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100

 UNION ALL

 select 'Hakedis Tahsilati' AS commentTR,'Hakedis Tahsilati' AS commentEN,'Hakedis Tahsilati' AS commentRU,'01' AS parentCode, '01.02' AS  code,dbo.ERPSF_CalculateAccountingTransactions('120',A.Id,3,2,1,0) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Hakedis Tahsilati - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t2 )'  AS nameTR,
'Hakedis Tahsilati - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t2 )'  AS nameEN, 
'Hakedis Tahsilati - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t2 )'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100

UNION ALL

 select 'Garanti Alacağı Tahsilati' AS commentTR,'Garanti Alacağı Tahsilati' AS commentEN,'Garanti Alacağı Tahsilati' AS commentRU,'01' AS parentCode, '01.03' AS  code,dbo.ERPSF_CalculateAccountingTransactions('126',A.Id,3,2,1,0) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Garanti Alacağı Tahsilati - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t3 )'  AS nameTR,
'Garanti Alacağı Tahsilati - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t3 )'  AS nameEN, 
'Garanti Alacağı Tahsilati - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t3 )'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100

UNION ALL

 select 'Toplam Tahsilat' AS commentTR,'Toplam Tahsilat' AS commentEN,'Toplam Tahsilat' AS commentRU,'01' AS parentCode, '01.04' AS  code,dbo.ERPSF_CalculateAccountingTransactions('340,120,126',A.Id,3,2,1,0) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Toplam Tahsilat - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t3 )'  AS nameTR,
'Toplam Tahsilat - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t3 )'  AS nameEN, 
'Toplam Tahsilat - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t3 )'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100

UNION ALL

 select 'Erken yapilan tahsilat nedeniyle indirimler' AS commentTR,'Erken yapilan tahsilat nedeniyle indirimler' AS commentEN,'Erken yapilan tahsilat nedeniyle indirimler' AS commentRU,'01' AS parentCode, '01.05' AS  code,dbo.ERPSF_CalculateAccountingTransactions('780.01.01',A.Id,6,NULL,2,0) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Erken yapilan tahsilat nedeniyle indirimler- '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( I )'  AS nameTR,
'Erken yapilan tahsilat nedeniyle indirimler - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( I )'  AS nameEN, 
'Erken yapilan tahsilat nedeniyle indirimler - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( I )'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100


UNION ALL

 select 'Hakedislerden kesilen cezalar' AS commentTR,'Hakedislerden kesilen cezalar' AS commentEN,'Hakedislerden kesilen cezalar' AS commentRU,'01' AS parentCode, '01.06' AS  code,dbo.ERPSF_CalculateAccountingTransactions('770',A.Id,6,NULL,2,1) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Hakedislerden kesilen cezalar- '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( Fines )'  AS nameTR,
'Hakedislerden kesilen cezalar - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( Fines )'  AS nameEN, 
'Hakedislerden kesilen cezalar - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( Fines )'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100

UNION ALL

 select 'Sözleşmeden kalan tahsilat' AS commentTR,'Sözleşmeden kalan tahsilat' AS commentEN,'Sözleşmeden kalan tahsilat' AS commentRU,'01' AS parentCode, '01.07' AS  code,dbo.ERPSF_CalculateAccountingTransactions('770',A.Id,6,NULL,2,1) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Sözleşmeden kalan tahsilat- '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - (S - TT - I - Fines - DDK)'  AS nameTR,
'Sözleşmeden kalan tahsilat - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - (S - TT - I - Fines - DDK)'  AS nameEN, 
'Sözleşmeden kalan tahsilat - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - (S - TT - I - Fines - DDK)'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100


---TAHSILAT BILGILER SON
---HAKEDİŞ BILGILER BASLANGIÇ
 UNION ALL

 select 'Toplam isverene sunulan hakedis' AS commentTR,'Toplam isverene sunulan hakedis' AS commentEN,'Toplam isverene sunulan hakedis' AS commentRU,'02' AS parentCode, '02.01' AS  code,dbo.ERPSF_CalculateAccountingTransactions('600',A.Id,6,NULL,1,0) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Toplam isverene sunulan hakedis - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( H )'  AS nameTR,
'Toplam isverene sunulan hakedis - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( H )'  AS nameEN, 
'Toplam isverene sunulan hakedis - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( H )'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100

 UNION ALL

 select 'Toplam hakedis duzeltmeleri' AS commentTR,'Toplam hakedis duzeltmeleri' AS commentEN,'Toplam hakedis duzeltmeleri' AS commentRU,'02' AS parentCode, '02.01' AS  code,dbo.ERPSF_CalculateAccountingTransactions('600',A.Id,6,NULL,2,0)*-1 as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Toplam hakedis duzeltmeleri - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( HD )'  AS nameTR,
'Toplam hakedis duzeltmeleri - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( HD )'  AS nameEN, 
'Toplam hakedis duzeltmeleri - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( HD )'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100

 UNION ALL

 select 'Hakedislerden yapilan garanti kesintileri' AS commentTR,'Hakedislerden yapilan garanti kesintileri' AS commentEN,'Hakedislerden yapilan garanti kesintileri' AS commentRU,'02' AS parentCode, '02.01' AS  code,dbo.ERPSF_CalculateAccountingTransactions('126',A.Id,6,NULL,2,0) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Hakedislerden yapilan garanti kesintileri - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( GK )'  AS nameTR,
'Hakedislerden yapilan garanti kesintileri - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( GK )'  AS nameEN, 
'THakedislerden yapilan garanti kesintileri - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( GK )'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100

 UNION ALL

 select 'Garanti kesintisi duzeltmeleri' AS commentTR,'Garanti kesintisi duzeltmeleri' AS commentEN,'Garanti kesintisi duzeltmeleri' AS commentRU,'02' AS parentCode, '02.01' AS  code,dbo.ERPSF_CalculateAccountingTransactions('126',A.Id,6,NULL,1,0) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Garanti kesintisi duzeltmeleri - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( GKD )'  AS nameTR,
'Garanti kesintisi duzeltmeleri - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( GKD )'  AS nameEN, 
'Garanti kesintisi duzeltmeleri - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( GKD )'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100

 UNION ALL

 select 'Garanti Alacak Kalani' AS commentTR,'Garanti Alacak Kalani' AS commentEN,'Garanti Alacak Kalani' AS commentRU,'02' AS parentCode, '02.02' AS  code,dbo.ERPSF_CalculateAccountingTransactions('126',A.Id,6,2,0,0) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Garanti Alacak Kalani- '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - (GA = GK - t3 - GKD)'  AS nameTR,
'Garanti Alacak Kalani - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - (GA = GK - t3 - GKD)'  AS nameEN, 
'Garanti Alacak Kalani - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - (GA = GK - t3 - GKD)'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100

 UNION ALL

 select 'Hakedislerden Kalan Alacaklar' AS commentTR,'Hakedislerden Kalan Alacaklar' AS commentEN,'Hakedislerden Kalan Alacaklar' AS commentRU,'02' AS parentCode, '02.03' AS  code,dbo.ERPSF_CalculateAccountingTransactions('120',A.Id,6,2,0,0) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Hakedislerden Kalan Alacaklar - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - (H - t2 - AK - GK - I - Fines)'  AS nameTR,
'Hakedislerden Kalan Alacaklar - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - (H - t2 - AK - GK - I - Fines)'  AS nameEN, 
'Hakedislerden Kalan Alacaklar - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - (H - t2 - AK - GK - I - Fines)'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100


 UNION ALL

 select 'Hakedislerden yapilan avans Kesintisi' AS commentTR,'Hakedislerden yapilan avans Kesintisi' AS commentEN,'Hakedislerden yapilan avans Kesintisi' AS commentRU,'02' AS parentCode, '02.04' AS  code,dbo.ERPSF_CalculateAccountingTransactions('340',A.Id,6,NULL,0,0) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Hakedislerden yapilan avans Kesintisi - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - (AK)'  AS nameTR,
'Hakedislerden yapilan avans Kesintisi - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - (AK)'  AS nameEN, 
'Hakedislerden yapilan avans Kesintisi - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - (AK)'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100

 UNION ALL

 select 'Avans Borcumuz' AS commentTR,'Avans Borcumuz' AS commentEN,'Avans Borcumuz' AS commentRU,'02' AS parentCode, '02.05' AS  code,dbo.ERPSF_CalculateAccountingTransactions('340',A.Id,3,2,1,0)-dbo.ERPSF_CalculateAccountingTransactions('340',A.Id,6,NULL,0,0) as amount,A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Avans Borcumuz - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t1 - AK )'  AS nameTR,
'Avans Borcumuz - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t1 - AK )'  AS nameEN, 
'Avans Borcumuz - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t1 - AK )'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100

 UNION ALL

 select 'Kalan Yapilacak Hakedis' AS commentTR,'Kalan Yapilacak Hakedis' AS commentEN,'Kalan Yapilacak Hakedis' AS commentRU,'02' AS parentCode, '02.06' AS  code,

 dbo.ERPSF_CalculateAccountingTransactions('340',A.Id,3,2,1,0)-dbo.ERPSF_CalculateAccountingTransactions('340',A.Id,6,NULL,0,0) as amount,
 
 A.Id as workplaceId,A.NameTR as  workPlaceNameTR, A.NameEN	workPlaceNameEN,A.NameRU workPlaceNameRU,
'Kalan Yapilacak Hakedis - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t1 - AK )'  AS nameTR,
'Kalan Yapilacak Hakedis - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t1 - AK )'  AS nameEN, 
'Kalan Yapilacak Hakedis - '+(SELECT [NameTR] from prizma.[dbo].[ERP_CurrencyType] where ID IN (SELECT [CurrencyTypeId] FROM [prizma].[dbo].[PM_Contract] WHERE (ContractTypeId = 260 ) and WorkPlaceId = 100 and Canceled = 0))+' - ( t1 - AK )'  AS nameRU,
c.Id currencyTypeId, 
c.NameTR as currencyTypeNameTR, 
c.NameEN as currencyTypeNameEN, 
c.NameRU as currencyTypeNameRU,
'' AS fillColor,'' AS fontColor
from SYS_WorkPlace A
LEFT JOIN SYS_Setting B ON 1=1
LEFT JOIN ERP_CurrencyType C ON B.FirmCurrencyType=C.Code
where A.Id=100


---HAKEDİŞ BILGILER BITIS