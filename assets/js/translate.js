angular
  .module("translate", ["pascalprecht.translate"])
  .config([
    "$translateProvider",
    function ($translateProvider) {
      var en_translations = {
        username_login: "Enter your username",
        password_login: "Enter your password",
        forgot_password: "Forgot Password?",
        wrong_credentials: "Wrong Credentials",
        check_registered: "Don't have account?",
        check_login: "Already registred?",
        empty_login: "Please enter username and password",
        login: "Login",
        register: "Register",
        username_label: "Username",
        name_label: "Name",
        lastname_label: "Last Name",
        email_label: "Email",
        password_label: "Password",
        password_repeat_label: "Repeat Password",
        back_to_login: "Back to Login",
        create_user: "Create User",
        greeting: "Welcome",
        username_required: "Username is required",
        name_required: "Name is required",
        lastname_required: "Last Name is required",
        email_required: "Email is required",
        email_format: "Email format is incorrect",
        password_required: "Password is required",
        password_length: "Password must be at least 8 characters long",
        password_format:
          "Password must have at least one upper and lower case characters and at least one digit",
          password_repeat_required: "Password confirmation is required",
          password_match: "Passwords should match",
          select_card: "Select Card",
          card_number: "Card Number:",
          card_type: "Type:",
          card_amount: "Amount:",
          account_information: "Account Information",
          cards_information: "Cards Information",
          logout: "Log out",
        };
        
      var ge_translations = {
        username_login: "მომხმარებლის სახელი",
        password_login: "მომხმარებლის პაროლი",
        check_registered: "არ ხართ დარეგისტრირებული?",
        check_login: "უკვე ხართ დარეგისტრირებული?",
        forgot_password: "დაგავიწყდათ პაროლი?",
        wrong_credentials: "არასწორი მონაცემები",
        empty_login: "გთხოვთ შეიყვანოთ ელექტრონული ფოსტა და პაროლი",
        login: "შესვლა",
        register: "რეგისტრაცია",
        username_label: "მომხმარებლის სახელი",
        name_label: "სახელი",
        lastname_label: "გვარი",
        email_label: "ელექტრონული ფოსტა",
        password_label: "პაროლი",
        password_repeat_label: "გაიმეორეთ პაროლი",
        back_to_login: "ავტორიზაციაზე დაბრუნება",
        create_user: "მომხმარებლის შექმნა",
        greeting: "გამარჯობა",
        username_required: "მომხმარებლის სახელი სავალდებულოა",
        name_required: "სახელი სავალდებულოა",
        lastname_required: "გვარი სავალდებულოა",
        email_required: "ელექტრონული ფოსტა სავალდებულოა",
        email_format: "არასწორი ფორმატის ელექტრონული ფოსტა",
        password_required: "პაროლი სავალდებულოა",
        password_length: "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს",
        password_format:
          "პაროლი უნდა შეიცავდეს მინიმუმ ერთ დიდ და პატარა ასოს და მინიმუმ ერთ ციფრს",
        password_repeat_required: "პაროლის გამეორება სავალდებულოა",
        password_match: "პაროლები არ ემთხვევა",
        select_card: "აირჩიეთ ბარათი",
        card_number: "ბარათის ნომერი:",
        card_type: "ბარათის ტიპი:",
        card_amount: "თანხის ოდენობა:",
        account_information: "მომხმარებლის ინფორმაცია",
        cards_information: "ბარათები",
        logout: "გამოსვლა",
      };

      $translateProvider.translations("en", en_translations);

      $translateProvider.translations("ge", ge_translations);

      $translateProvider.preferredLanguage("en");
    },
  ])
  .controller("translateController", [
    "$scope",
    "$translate",
    function ($scope, $translate) {
      $scope.selectedLanguage = "en";

      $scope.changeLanguage = function (language) {
        $scope.selectedLanguage = language;
        $translate.use(language);
      };
    },
  ]);
