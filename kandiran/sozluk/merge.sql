DECLARE @EMFICHE_ID INT
DECLARE @FICHE_ID INT = 121
DECLARE @DOCUMENT_DATE  DATETIME 
DECLARE @DOCUMENT_NO NVARCHAR(50)

SELECT @DOCUMENT_DATE=DocumentDate,@DOCUMENT_NO=DocumentNo  FROM ERP_AccountingReceipt WHERE Id=@FICHE_ID
""
INSERT INTO
    logo.[dbo].[LG_001_01_EMFICHE] (
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
    (select TOP 1 RIGHT('000000' + CAST(CAST(FICHENO AS INT) + 1 AS VARCHAR), 6) from logo.dbo.LG_909_01_EMFICHE(NOLOCK) ORDER BY LOGICALREF DESC),
    DocumentDate,
    'TAHAHKKUK',
    '',
    DocumentNo,
    0,
    0,
    0,
    0,
    0,
    [description],
    '',
    '',
    '',
    '',
    '',
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
    '',
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
    '',
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
    '0000X0X0X0X'
FROM
    ERP_AccountingReceipt AR (NOLOCK) where Id=@FICHE_ID

SELECT @EMFICHE_ID=SCOPE_IDENTITY();

--- SATIRLAR


INSERT INTO
    logo.[dbo].[LG_001_01_EMFLINE] (
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
    '2024-12-11',
    CASE
        WHEN Debit IS NULL THEN 0
        ELSE 1
    END,
    (
        SELECT
            LOGICALREF
        FROM
            logo.dbo.LG_001_EMUHACC (NOLOCK)
        WHERE
            CODE = ARD.accountingPlanCode
    ),
    @EMFICHE_ID,
    costCenterCode,
    4,
    0,
    'ilk üç karakter accountingPlanCode',
    accountingPlanCode,
    '',
    Debit,
    Credit,
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
    '',
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
    '',
    '',
    '',
    0,
    @DOCUMENT_DATE,
    0,
    0,
    0,
    0,
    0,
    0,
    '',
    0,
    0,
    0,
    0,
    NEWID(),
    0,
    '',
    0,
    0,
    ''
FROM
    ERPV_AccountingReceiptDetail ARD (NOLOCK) where accountingReceiptId=@FICHE_ID


