USE [prizmastellar]
GO

/****** Object:  StoredProcedure [dbo].[SpLogoLastCode]    Script Date: 12.12.2024 9:53:00 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[Sp_Logo_Stellar_AccountRecept_And_Detail]
 @WORKPLACE_ID NVARCHAR(10)='',
 @FICHE_ID INT
AS
BEGIN
DECLARE @SQL1 NVARCHAR(MAX)
DECLARE @SQL2 NVARCHAR(MAX)
SET @SQL1 = '
DECLARE @EMFICHE_ID INT
DECLARE @DOCUMENT_DATE  DATETIME 
DECLARE @DOCUMENT_NO NVARCHAR(50)
DECLARET @RECHASH NVARCHAR(250)

SELECT @DOCUMENT_DATE=DocumentDate,@DOCUMENT_NO=DocumentNo  FROM ERP_AccountingReceipt WHERE Id='+CAST(@FICHE_ID AS NVARCHAR(50))+'
INSERT INTO stellar.[dbo].[LG_'+@WORKPLACE_ID+'_01_EMFICHE] (
        [TRCODE],
        [FICHENO],
        [DATE_],
        [SPECODE],
        [CYPHCODE],
        [DOCODE],
        [BRANCH],
        [DEPARTMENT],
        [MODULENO],
        [SOURCEFREF],
        [EXTENREF],
        [GENEXP1],
        [GENEXP2],
        [GENEXP3],
        [GENEXP4],
        [GENEXP5],
        [GENEXP6],
        [JOURNALNO],
        [TOTALACTIVE],
        [TOTALPASSIVE],
        [CANCELLED],
        [PRINTCNT],
        [CAPIBLOCK_CREATEDBY],
        [CAPIBLOCK_CREADEDDATE],
        [CAPIBLOCK_CREATEDHOUR],
        [CAPIBLOCK_CREATEDMIN],
        [CAPIBLOCK_CREATEDSEC],
        [CAPIBLOCK_MODIFIEDBY],
        [CAPIBLOCK_MODIFIEDDATE],
        [CAPIBLOCK_MODIFIEDHOUR],
        [CAPIBLOCK_MODIFIEDMIN],
        [CAPIBLOCK_MODIFIEDSEC],
        [MODULENR],
        [CANCFREF],
        [EMUTOTACTIVE],
        [EMUTOTPASSIVE],
        [GENEXCTYP],
        [LINEEXCTYP],
        [SITEID],
        [RECSTATUS],
        [ORGLOGICALREF],
        [REPTOTACTIVE],
        [REPTOTPASSIVE],
        [TEXTINC],
        [WFSTATUS],
        [CROSSFREF],
        [CROSSFLAG],
        [DOCTYPE],
        [ORGLOGOID],
        [STATUS],
        [BDGTFCTYPE],
        [BDGTFCREF],
        [FROMDEMTYPE],
        [EMDEMFCREF],
        [WFLOWCRDREF],
        [VIAAUTOGL],
        [APPROVE],
        [APPROVEDATE],
        [DOCDATE],
        [BATCHTYPE],
        [GUID],
        [LINEBASEDDOCDET],
        [ISIMPDISTFC],
        [PRINTDATE],
        [PROJECTREF],
        [PERSBEGDATE],
        [PERSENDDATE],
        [RECHASH]
    )
SELECT
    4,
    (select TOP 1 RIGHT(''00000'' + CAST(CAST(FICHENO AS INT) + 1 AS VARCHAR), 5) from stellar.dbo.LG_'+@WORKPLACE_ID+'_01_EMFICHE(NOLOCK) ORDER BY LOGICALREF DESC),
    DocumentDate,
    ''TAHAHKKUK'',
    ''PRIZMA-''+CAST(Id AS NVARCHAR(10)),
    DocumentNo,
    0,
    0,
    0,
    0,
    0,
    [description],
    '''',
    '''',
    '''',
    '''',
    '''',
    0,
    (
        select
            amount
        from
            ERPV_AccountingReceipt (nolock)
        where
            id = AR.id
    ),
    (
        select
            amount
        from
            ERPV_AccountingReceipt (nolock)
        where
            id = AR.id
    ),
    0,
    0,
    '''',
    createdOn,
    DATEPART(HOUR, createdOn),
    DATEPART(MINUTE, createdOn),
    DATEPART(SECOND, createdOn),
    0,
    NULL,
    NULL,
    NULL,
    NULL,
    0,
    0,
    (
        select
            reportAmount
        from
            ERPV_AccountingReceipt (nolock)
        where
            id = AR.id
    ),
    (
        select
            reportAmount
        from
            ERPV_AccountingReceipt (nolock)
        where
            id = AR.id
    ),
    1,
    0,
    0,
    1,
    0,
    (
	select
            reportAmount
        from
            ERPV_AccountingReceipt (nolock)
        where
            id = AR.id
    ),
    (
        select
            reportAmount
        from
            ERPV_AccountingReceipt (nolock)
        where
            id = AR.id
    ),
    0,
    0,
    0,
    0,
    0,
    '''',
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    NULL,
    @DOCUMENT_DATE,
    0,
    NEWID(),
    0,
    0,
    NULL,
    0,
    NULL,
    NULL,
    ''''
FROM
    ERP_AccountingReceipt AR (NOLOCK) where Id='+CAST(@FICHE_ID AS NVARCHAR(50))+'
SELECT @EMFICHE_ID=SCOPE_IDENTITY();

SELECT @RECHASH=RECHASH FROM stellar.[dbo].A_Rechash WHERE FIRMNR='+@WORKPLACE_ID+' AND TYPE=4 AND LOGICALREF=@EMFICHE_ID ;
UPDATE stellar.[dbo].LG_'+@WORKPLACE_ID+'_01_EMFICHE SET RECHASH='''' WHERE LOGICALREF=@EMFICHE_ID;

'
SET @SQL2 = '
INSERT INTO
    stellar.[dbo].[LG_'+@WORKPLACE_ID+'_01_EMFLINE] (
        [DATE_],
        [SIGN],
        [ACCOUNTREF],
        [ACCFICHEREF],
        [CENTERREF],
        [TRCODE],
        [BRANCH],
        [KEBIRCODE],
        [ACCOUNTCODE],
        [SPECODE],
        [DEBIT],
        [CREDIT],
        [LINENO_],
        [LINEEXP],
        [CANCELLED],
        [TRCURR],
        [CURRDIFFCALC],
        [REPORTRATE],
        [REPORTNET],
        [TRRATE],
        [TRNET],
        [AMNT],
        [EXTENREF],
        [EMUDEBIT],
        [EMUCREDIT],
        [LINEEXCTYP],
        [CROSSCODE],
        [SITEID],
        [RECSTATUS],
        [ORGLOGICREF],
        [INFIDX],
        [NOTINFLATED],
        [NOTCALCULATED],
        [FROMWHERE],
        [OWNERACCREF],
        [DEPARTMENT],
        [BDGTLINETYPE],
        [STATUS],
        [BDGTFCTYPE],
        [BDGTFCREF],
        [BDGTFCLNREF],
        [BDGTFCPRDREF],
        [FROMDEMTYPE],
        [EMDEMFCREF],
        [EMDEMLNREF],
        [PARENTLNREF],
        [PAIDTOTAL],
        [CLOSED],
        [OUTFCTYPE],
        [OUTFCREF],
        [CREATEBDGTLN],
        [MONTH_],
        [YEAR_],
        [GRPFIRMTRANS],
        [INVOICENO],
        [CLDEF],
        [TAXNR],
        [FORTAXDECL],
        [DOCDATE],
        [UFRSLNREF],
        [UFRSNETAMNT],
        [GLOBLINENO],
        [LINETYPE],
        [CODEREF],
        [CASHLINE],
        [TCKNO],
        [PROJECTREF],
        [MNTHCOUNT],
        [MNTHSOURCEREF],
        [MNTHLINE],
        [GUID],
        [SOURCEFREF],
        [SPECODE2],
        [DISTTEMPREF],
        [SOURCEFLNREF],
        [CLCODE]
    )
SELECT
    @DOCUMENT_DATE,
    CASE
        WHEN Debit IS NULL THEN 0
        ELSE 1
    END,
    (
        SELECT
            LOGICALREF
        FROM
            stellar.dbo.LG_'+@WORKPLACE_ID+'_EMUHACC (NOLOCK)
        WHERE
            CODE = ARD.accountingPlanCode
    ),
    @EMFICHE_ID,
    costCenterCode,
    4,
    0,
    SUBSTRING(accountingPlanCode,0,4),
    accountingPlanCode,
    '''',
    ISNULL(Debit,0),
    ISNULL(Credit,0),
    RowNo,
    Description,
    0,
    20,
    0,
    ReportRate,
    CASE
        WHEN Debit IS NULL THEN reportRate
        ELSE reportRate
    END,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    '''',
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    MONTH(@DOCUMENT_DATE),
    MONTH(@DOCUMENT_DATE),
    0,
    '''',
    '''',
    '''',
    0,
    @DOCUMENT_DATE,
    0,
    0,
    0,
    0,
    0,
    0,
    '''',
    0,
    0,
    0,
    0,
    NEWID(),
    0,
    '''',
    0,
    0,
    ''''
FROM
    ERPV_AccountingReceiptDetail ARD (NOLOCK) where accountingReceiptId='+CAST(@FICHE_ID AS NVARCHAR(50))+''

	EXEC (@SQL1+@SQL2)


END
GO


