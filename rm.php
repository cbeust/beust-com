<?

    /**
     * Delete a file or recursively delete a directory
     *
     * @param string $str Path to file or directory
     */
    function recursiveDelete($str){
        if(is_file($str)){
            return @unlink($str);
        }
        elseif(is_dir($str)){
            $scan = glob(rtrim($str,'/').'/*');
            foreach($scan as $index=>$path){
                recursiveDelete($path);
            }
            return @rmdir($str);
        }
    }

unlink("FUDforum/thm/path_info/.path_info");
recursiveDelete("FUDforum/thm");
recursiveDelete("FUDforum/tmp/.htaccess");
recursiveDelete("FUDforum/tmp");

?>

