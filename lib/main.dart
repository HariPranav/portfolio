import 'package:curved_navigation_bar/curved_navigation_bar.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/pages/flutterPages.dart';
import 'package:portfolio/pages/pageClient.dart';
import 'package:portfolio/pages/pagePlace.dart';
import 'package:portfolio/pages/pageProducts.dart';


void main() => runApp(MaterialApp(home: BottomNavBar()));

class BottomNavBar extends StatefulWidget {
    
  @override
  _BottomNavBarState createState() => _BottomNavBarState();
}

class _BottomNavBarState extends State<BottomNavBar> {
  
  int pageIndex=0;
  GlobalKey _bottomNavigationKey = GlobalKey();

   final  PageClient _client = new PageClient();
   final PagePlace _sites = new PagePlace();
  final PageProducts _listproducts = new PageProducts();
   final PageFlutter _flutterpages = new PageFlutter();

  Widget _showPage = new PageProducts();

   Widget _pageChooser(int page)
  {
    switch(page)
    {
      case 0:
      return _client;
      break;
      case 1:
      return _sites;
      break;
      case 2:
      return _listproducts;
      break;

      case 3:
      return _flutterpages;
      break;



    }
  } 
  int currentIndex = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      
        bottomNavigationBar: CurvedNavigationBar(
          initialIndex:pageIndex,
          key: _bottomNavigationKey,
          
          items: <Widget>[
            new Tab(icon: new Image.asset("assets/icons8-hacker-64.png",fit: BoxFit.fill,),),
            new Tab(icon: new Image.asset("assets/Profile3.png",),),
            new Tab(icon: new Image.asset("assets/blog.png",),),
            
            
          ],
          color: Colors.white,
          buttonBackgroundColor: Colors.white,
          backgroundColor: Colors.blueAccent,
          animationCurve: Curves.easeInOut,
          animationDuration: Duration(milliseconds: 600),
          onTap: (int tappedIndex) {
            setState(() {
              _showPage = _pageChooser(tappedIndex);
            });
          },
        ),
        body: Container(
          color: Colors.blueAccent,
          child: Center(
            child: _showPage,
          ),
        ),
        
        );
  }
}
