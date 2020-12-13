;;
;; Sample xemacs-lisp code to highlight datamembers starting with
;; an underscore. This code will work both with the standard
;; java-mode and jde-mode.
;; -- Cedric Beust (cedric@sunlabs.com)
;;

(setq ced-want-java-font-lock t)
(if ced-want-java-font-lock (progn
      (require 'font-lock)
      (make-face 'ced-type-face)
      (set-face-foreground  'ced-type-face "white")

      (copy-face 'blue 'datamember)
      (copy-face 'blue 'datamember-assigned)
      (set-face-background 'datamember-assigned "grey60")
      (copy-face 'ced-type-face 'result)
      (copy-face 'ced-type-face 'result-assigned)
      (set-face-background 'result-assigned "grey60")
      (setq ced-java-font-lock-keywords ;; gnus-article-font-lock-keywords
	    (list
	     '("\\(result\\) ?=" . (1 result-assigned))
	     '("return\\|result" . result)
	     '("new " . green)
	     '("[^a-zA-Z]_\\([a-zA-Z]+\\) ?=" . (1 datamember-assigned))
	     '("[^a-zA-Z]_\\([a-zA-Z]+\\)" . (1 datamember))
	     ;; Class names:
	     (list (concat "\\<class\\>\\s *" java-font-lock-identifier-regexp)
		   1 'font-lock-function-name-face)
	     ;; Methods:
	     (list (concat "\\(" java-font-lock-type-regexp "\\|"
			   java-font-lock-class-name-regexp "\\)"
			   "\\s *\\(\\[\\s *\\]\\s *\\)*"
			   java-font-lock-identifier-regexp "\\s *\(")
		   5
		   'font-lock-function-name-face)

	       ))
               ;; setq ced-java-font-lock-keywords
	(add-hook 'jde-entering-java-buffer-hooks '(lambda()
           (setq font-lock-keywords ced-java-font-lock-keywords)
	))
	(add-hook 'java-mode-hook '(lambda()
           (setq font-lock-keywords ced-java-font-lock-keywords)
	))
)) ;; if
