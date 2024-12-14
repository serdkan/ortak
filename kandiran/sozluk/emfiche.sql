INSERT INTO
    [dbo].[LG_001_01_EMFICHE] (
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
    'splogolastcode',
    documentdate,
    'TAHAHKKUK',
    '',
    documentNo,
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
    documentdate,
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
    ERP_AccountingReceipt AR (NOLOCK)