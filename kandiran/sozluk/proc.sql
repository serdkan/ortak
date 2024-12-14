DECLARE @SQL NVARCHAR(MAX)

DECLARE @WORKPLACE_ID VARCHAR(10);

DECLARE WorkplaceCursor CURSOR FOR
SELECT Id FROM SYS_WorkPlace (nolock)
OPEN WorkplaceCursor;
FETCH NEXT FROM WorkplaceCursor INTO @WORKPLACE_ID;
WHILE @@FETCH_STATUS = 0
BEGIN
			IF @WORKPLACE_ID='400' 
			BEGIN 
			SET @WORKPLACE_ID = '001'
			END
				
				SET @SQL = '
											DECLARE @WORKPLACE_INNERID NVARCHAR(10);
											DECLARE @ID INT;
											DECLARE AccountReceptCursor CURSOR FOR
											SELECT Id,WorkPlaceId FROM ERP_AccountingReceipt (NOLOCK) WHERE ''PRIZMA-''+CAST(Id AS nvarchar(50)) NOT IN (SELECT ISNULL(CYPHCODE,'''') FROM  stellar.dbo.LG_'+CAST(@WORKPLACE_ID AS NVARCHAR(10))+'_01_EMFICHE) AND WorkPlaceId='+CAST(@WORKPLACE_ID AS NVARCHAR(10))+'
											OPEN AccountReceptCursor;
											FETCH NEXT FROM AccountReceptCursor INTO @ID,@WORKPLACE_INNERID;
											WHILE @@FETCH_STATUS = 0
											BEGIN
												EXEC Sp_Logo_Stellar_AccountRecept_And_Detail @WORKPLACE_INNERID,@ID;
											FETCH NEXT FROM AccountReceptCursor INTO @ID,@WORKPLACE_INNERID;
											END;
											CLOSE AccountReceptCursor;
											DEALLOCATE AccountReceptCursor;	
							'

					EXEC (@SQL)

FETCH NEXT FROM WorkplaceCursor INTO @WORKPLACE_ID;
END;
CLOSE WorkplaceCursor;
DEALLOCATE WorkplaceCursor;